using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Entity.DataTransferObjects
{
    public class AddressDTO
    {
        public string CountryName { get; set; }

        public string TownName { get; set; }

        public string StreetName { get; set; }

        public int StreetNumber { get; set; }

        public int ZipCode { get; set; }
    }
}
