using AutoMapper;
using Delivery.Entity;
using Delivery.Entity.DataTransferObjects;
using Delivery.Entity.Model.Classes;
using Delivery.Entity.Model.Enums;
using Delivery.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Delivery.Services.UserService
{
    public class UserService : IUserService
    {
        public DeliveryContext _context;
        public IMapper _mapper;
        public UserService(IMapper mapper, DeliveryContext context)
        {
            _context = context;
            _mapper = mapper;
        }

        // ----Register Section----
        public ResponseDTO<User> Register(UserDTO dataIn)
        {
            var user = _mapper.Map<User>(dataIn);
            var existing = _context.Users.FirstOrDefault(x => !x.IsDeleted && x.Email == user.Email);

            if (existing == null)
            {
                switch (Convert.ToInt32(dataIn.Role))
                {
                    case 1:
                        user.RoleId = 2; //User
                        user.Status = StatusE.Active;
                        break;
                    case 2:
                        user.RoleId = 3; //Deliverer
                        user.Status = StatusE.Pending;
                        break;
                    default:
                        return new ResponseDTO<User>(false, "Error while selecting Role. Try again!");
                }
                _context.Users.Add(user);
                _context.SaveChanges();

                return new ResponseDTO<User>(user);
            }
            else
            {
                return new ResponseDTO<User>(false, "Email address is already in use!");
            }
        }



        // ----Login Section----
        public User GetUserByEmailAndPass(string email, string pass)
        {
            var retval = this._context.Users
                .Include(x => x.Role)
                .FirstOrDefault(x => !x.IsDeleted && x.Email == email && x.Password == pass);

            if (retval?.Password != pass)
                return null;

            return retval;
        }

    }
}
