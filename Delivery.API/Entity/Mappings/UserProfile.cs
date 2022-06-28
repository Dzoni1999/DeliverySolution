using AutoMapper;
using Delivery.Entity.DataTransferObjects;
using Delivery.Entity.Model.Classes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Entity.Mappings
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDTO>().ReverseMap().ForMember(x => x.Role, role => role.Ignore()).ForMember(x => x.Status, st => st.Ignore());
        }
    }
}
