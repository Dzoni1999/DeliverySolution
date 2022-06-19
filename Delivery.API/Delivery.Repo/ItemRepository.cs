using Delivery.Contracts;
using Delivery.Entity;
using Delivery.Entity.Model.Classes;
using Delivery.Repo;
using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Repository
{
    public class ItemRepository : RepositoryBase<Item>, IItemRepository
    {
        public ItemRepository(DeliveryContext deliveryContext)
            : base(deliveryContext)
        {
        }
    }
}
