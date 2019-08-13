using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using Topaz;

namespace topaz_sigplusnet_webapi.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*", exposedHeaders: "", SupportsCredentials = true)]
	[RoutePrefix("api/SigPlus")]
	public class SigPlusController : ApiController
    {
        // GET: api/SigPlus
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/SigPlus/5
        public string Get(string name)
        {
			SigPlusNET sig = new SigPlusNET("Web");
			int result = sig.GetTabletState();
			return result.ToString();
		}

		[HttpGet]
		[Route("GetTabletState")]
		public IHttpActionResult GetTabletState()
		{
			SigPlusNET sig = new SigPlusNET("Web");
			int result = sig.GetTabletState();
			//return Ok(result.ToString());
			return Ok(result);
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
