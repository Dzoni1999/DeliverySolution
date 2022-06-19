using Delivery.Contracts;
using Delivery.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Repository
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        public DeliveryContext _deliveryContext;
        public IUserRepository _user;
        public IOrderRepository _order;
        public IItemRepository _item;

        //public RepositoryWrapper(DeliveryContext context)
        //{
        //    _deliveryContext = context;
        //}
        public IUserRepository User
        {
            get
            {
                if (_user == null)
                {
                    _user = new UserRepository(_deliveryContext);
                }
                return _user;
            }
        }

        public IOrderRepository Order
        {
            get
            {
                if (_order == null)
                {
                    _order = new OrderRepository(_deliveryContext);
                }
                return _order;
            }
        }

        public IItemRepository Item
        {
            get
            {
                if (_item == null)
                {
                    _item = new ItemRepository(_deliveryContext);
                }
                return _item;
            }
        }

        public void Save()
        {
            _deliveryContext.SaveChanges();
        }
    }
}
