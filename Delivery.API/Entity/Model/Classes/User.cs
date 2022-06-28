using Delivery.Entity.Model.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Delivery.Entity.Model.Classes
{
    public class User : EntityCore
    {
        [Required]
        [StringLength(maximumLength: 20, ErrorMessage = "Name must be between 3 and 20 characters!", MinimumLength = 3)]
        public string Name { get; set; }

        [Required]
        [StringLength(maximumLength: 20, ErrorMessage = "Name must be between 3 and 20 characters!", MinimumLength = 3)]
        public string LastName { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Email is not in valid format!")]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }

        [Required]
        public string Address { get; set; }

        public string Permissions { get; set; }

        [Required]
        public int RoleId { get; set; }
        public Role Role { get; set; }

        public StatusE Status { get; set; }
    }
}
