using Delivery.Entity.Model.Classes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Entity.DataTransferObjects
{
    public class ItemDTO
    {
        public string ItemName { get; set; }
        public string ItemPrice { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
    }
}
