using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Delivery.Entity.Model.Classes
{
    public class Item : EntityCore
    {
        public string ItemName { get; set; }

        public string ItemPrice { get; set; }

        [ForeignKey(nameof(Order))]
        public int OrderId { get; set; }

        public Order Order { get; set; }
    }
}
