using Delivery.Contracts;
using Delivery.Entity.DataTransferObjects;
using Delivery.Entity.Model.Classes;
using Delivery.Service.Helpers;
using Delivery.Services.Interfaces;
using Delivery.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Delivery.Service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private IRepositoryWrapper _repository;
        private IUserService _userService; 

        public UserController(IRepositoryWrapper repositoryWrapper, IUserService userService)
        {
            _repository = repositoryWrapper;
            _userService = userService;
        }

        // ----Register Section----

        [HttpPost]
        [Route("RegisterUser")]
        public ActionResult Register(UserDTO userInfo)
        {
            try
            {
                var retval = this._userService.Register(userInfo);

                return Ok(retval);

            }
            catch (Exception e)
            {
                return new JsonResult(e.Message);
            }
        }


        //----- Login Section----

        [HttpPost]
        [Route("CheckIfUserExists")]
        public ActionResult CheckIfUserExists(LoginDTO loginInfo)
        {
            try { 
                ResponseDTO<string> retval = null;

                var user = this._userService.GetUserByEmailAndPass(loginInfo.Email, loginInfo.Password);

                if (user == null)
                    retval = new ResponseDTO<string>(false, "Wrong email or password.");

                else if (user.Status == Entity.Model.Enums.StatusE.Pending && user.RoleId == 3)
                    retval = new ResponseDTO<string>(false, "Pending Activation");

                else if (user.Status == Entity.Model.Enums.StatusE.Inactive && user.RoleId != 1)
                    retval = new ResponseDTO<string>(false, "Access denied, the account is inactive");

                else
                {
                    string token = JwtManager.GetToken(user.Email, user.Role?.Name, user.ID, user.Role?.Permissions, user.Name);
                    retval = new ResponseDTO<string>(token, user.RoleId, true, "");
                }

                return Ok(retval);

            }
            catch(Exception e)
            {
                return new JsonResult("Unknown error occured while trying to login!");
            }
        }
    }
}
