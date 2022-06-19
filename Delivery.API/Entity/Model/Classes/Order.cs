using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Entity.Model.Classes
{
    public class Order : EntityCore
    {
        public string Amount { get; set; }
        public virtual Address Address { get; set; }
        public string Comment { get; set; }
        public List<Item> Items { get; set; }
        public string Price { get; set; }
    }
}
