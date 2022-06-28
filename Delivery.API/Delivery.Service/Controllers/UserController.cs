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
            var retval = this._userService.Register(userInfo);

            return Ok(retval);
        }


        //----- Login Section----

        [HttpPost]
        [Route("CheckIfUserExists")]
        public ActionResult CheckIfUserExists(LoginDTO loginInfo)
        {
            ResponseDTO<string> retval = null;

            var user = this._userService.GetUserByEmailAndPass(loginInfo.Email, loginInfo.Password);

            string token = JwtManager.GetToken(user.Email, user.Role?.Name, user.ID, user.Role?.Permissions, user.Name);
            retval = new ResponseDTO<string>(token);

            return Ok(retval);
        }

        [HttpGet]
        [Route("GetUserById")]
        public User GetUserById(int userId)
        {
            User user = new User();
            return user;
        }
    }
}
