using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Contracts
{
    public interface IRepositoryWrapper
    {
        IUserRepository User { get; }
        IOrderRepository Order { get; }
        IItemRepository Item { get; }
        void Save();
    }
}
