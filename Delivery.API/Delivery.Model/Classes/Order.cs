using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Model.Classes
{
    public class Order : Entity
    {
        public string Amount { get; set; }
        public virtual Address Address { get; set; }
        public string Comment { get; set; }
        public List<Item> Items { get; set; }
        public string Price { get; set; }
    }
}
