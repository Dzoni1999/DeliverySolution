using Delivery.Entity.DataTransferObjects;
using Delivery.Entity.Model.Classes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Services.Interfaces
{
    public interface IUserService
    {
        ResponseDTO<User> Register(UserDTO dataIn);
        User GetUserByEmailAndPass(string email, string pass);
    }
}
