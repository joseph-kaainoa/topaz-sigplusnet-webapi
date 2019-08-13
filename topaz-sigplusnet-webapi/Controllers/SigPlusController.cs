using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Topaz;

namespace topaz_sigplusnet_webapi_standard.Controllers
{
    public class SigPlusController : ApiController
    {
        // GET: api/SigPlus
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/SigPlus/5
        public string Get(string propertyName)
        {
			SigPlusNET sig = new SigPlusNET("Web");
			int result = sig.GetTabletState();
			return result.ToString();
		}

		// POST: api/SigPlus
		public void Post([FromBody]string value)
        {

        }

        // PUT: api/SigPlus/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/SigPlus/5
        public void Delete(int id)
        {
        }
    }
}
