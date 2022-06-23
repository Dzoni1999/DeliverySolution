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

        public UserController(IRepositoryWrapper repositoryWrapper)
        {
            _repository = repositoryWrapper;
        }

        // ----Register Section----

        [HttpPost]
        [Route("RegisterUser")]
        public ActionResult Register(UserDTO userInfo)
        {
            var retval = _userService.Register(userInfo);

            return Ok(retval);
        }


        //----- Login Section----

        [HttpPost]
        [Route("CheckIfUserExists")]
        public ActionResult CheckIfUserExistsa(LoginDTO loginInfo)
        {
            ResponseDTO<string> retval;

            User user = new User() { ID=5, Email="111", Name = "111", LastName = "111", UserName = "111", Role = Entity.Model.Enums.Role.Admin, Permissions=""};

            if (user == null)
                retval = new ResponseDTO<string>(false, "Wrong email or password.");
            else
            {
                string token = JwtManager.GetToken(user.Email, user.Role.ToString(), user.ID, user.Permissions, user.UserName);
                retval = new ResponseDTO<string>(token);
            }

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
