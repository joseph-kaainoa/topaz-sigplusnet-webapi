using System;
using System.Reflection;

namespace topaz_sigplusnet_webapi_standard.Areas.HelpPage.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}