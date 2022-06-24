using AutoMapper;
using Delivery.Entity;
using Delivery.Entity.DataTransferObjects;
using Delivery.Entity.Model.Classes;
using Delivery.Services.Interfaces;
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
                user = MapUser(dataIn);
                _context.Users.Add(user);
                _context.SaveChanges();

                return new ResponseDTO<User>(user);
            }
            else
            {
                return new ResponseDTO<User>(false, "Email address is already in use!");
            }
        }

        private User MapUser(UserDTO user)
        {
            User mappedUser = new User();
            mappedUser.Name = user.Name;
            mappedUser.LastName = user.LastName;
            mappedUser.UserName = user.UserName;
            mappedUser.Email = user.Email;
            mappedUser.Password = user.Password;
            mappedUser.Role = user.Role;
            mappedUser.BirthDate = user.BirthDate;
            mappedUser.Address = user.Address;

            return mappedUser;
        }

        // ----Login Section----

    }
}
