using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Delivery.Model.Classes
{
    public class Item : Entity
    {
        public string ItemName { get; set; }

        public string ItemPrice { get; set; }

        [ForeignKey(nameof(Order))]
        public int OrderId { get; set; }

        public Order Order { get; set; }
    }
}
