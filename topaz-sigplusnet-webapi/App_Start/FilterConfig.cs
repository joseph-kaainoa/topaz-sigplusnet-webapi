using System.Web;
using System.Web.Mvc;

namespace topaz_sigplusnet_webapi_standard
{
	public class FilterConfig
	{
		public static void RegisterGlobalFilters(GlobalFilterCollection filters)
		{
			filters.Add(new HandleErrorAttribute());
		}
	}
}
