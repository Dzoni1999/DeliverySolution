using System;
using System.Collections.Generic;
using System.Text;

namespace Delivery.Entity.DataTransferObjects
{
    public class ResponseDTO<T>
    {
        public bool Status { get; set; } = true;

        public string Message { get; set; } = string.Empty;

        public int Role { get; set; } = 0;

        public T Data { get; set; }

        public ResponseDTO(T data, bool status = true, string message = "")
        {
            Data = data;
            Status = status;
            Message = message;
        }
        public ResponseDTO(T data, int role, bool status = true, string message = "")
        {
            Data = data;
            Role = role;
            Status = status;
            Message = message;
        }

        public ResponseDTO(bool status, string message)
        {
            Status = status;
            Message = message;
        }
    }
}
