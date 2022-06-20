using Delivery.Entity.Model.Classes;
using Delivery.Entity.Model.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Entity.DataTransferObjects
{
    public class UserDTO
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime BirthDate { get; set; }
        public virtual Address Address { get; set; }
        public Role Role { get; set; }
    }
}
