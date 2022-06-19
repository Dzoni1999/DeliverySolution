using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Delivery.Model.Classes
{
    public class Address : Entity
    {
        public string CountryName { get; set; }

        public string TownName { get; set; }

        public string StreetName { get; set; }

        public int StreetNumber { get; set; }

        public int ZipCode { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public virtual User User { get; set; }

        [ForeignKey("Order")]
        public int OrderId { get; set; }
        public virtual Order Order { get; set; }
    }
}
