using Delivery.Contracts;
using Delivery.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace Delivery.Repo
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected DeliveryContext DeliveryContext { get; set; }
        public RepositoryBase(DeliveryContext context)
        {
            DeliveryContext = context;
        }

        public void Create(T entity)
        => DeliveryContext.Set<T>().Add(entity);

        public void Delete(T entity)
        => DeliveryContext.Set<T>().Remove(entity);

        public IQueryable<T> FindAll()
        => DeliveryContext.Set<T>().AsNoTracking();

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        => DeliveryContext.Set<T>().Where(expression).AsNoTracking();

        public void Update(T entity)
        => DeliveryContext.Set<T>().Update(entity);
    }
}
