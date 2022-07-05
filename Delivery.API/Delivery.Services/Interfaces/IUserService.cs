using Delivery.Entity.DataTransferObjects;
using Delivery.Entity.Model.Classes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Services.Interfaces
{
    public interface IUserService
    {
        //---- Register Methods ----
        ResponseDTO<User> Register(UserDTO dataIn);

        //---- Login Methods ----
        User GetUserByEmailAndPass(string email, string pass);


        //---- CRUD Methods ----
        public List<User> GetAllUsers();
        public User GetCurrentUser(int id);
        public string ActivateAccount(int id);
    }
}
