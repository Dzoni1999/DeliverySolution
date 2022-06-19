using Delivery.Contracts;
using Delivery.Entity;
using Delivery.Entity.Model.Classes;
using Delivery.Repo;
using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Repository
{
    public class OrderRepository : RepositoryBase<Order>, IOrderRepository
    {
        public OrderRepository(DeliveryContext deliveryContext)
            : base(deliveryContext)
        {
        }
    }
}
