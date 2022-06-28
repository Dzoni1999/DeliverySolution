using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Entity.Model.Classes
{
    public class Role : EntityCore
    {
        public string Name { get; set; }
        public string Permissions { get; set; }
    }
}
