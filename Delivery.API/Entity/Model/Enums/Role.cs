using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace Delivery.Entity.Model.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum RoleE
    {
        Admin,
        User,
        Deliverer
    }
}
