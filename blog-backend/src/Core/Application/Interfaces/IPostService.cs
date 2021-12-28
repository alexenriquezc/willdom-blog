using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IPostService
    {
        Task<IAsyncEnumerable<string>> GetAllAsync();
        Task<string> Save(string id);
    }
}
