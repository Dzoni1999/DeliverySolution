using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Delivery.Model.Classes
{
    public class Entity
    {
        [Key]
        public int ID { get; set; }
        public bool IsDeleted { get; set; }
    }
}
