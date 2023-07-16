namespace CatFacts.Helpers
{
    internal static class FactsHelper
    {

        public static HttpClient Client = new()
        {
            BaseAddress = new Uri("https://catfact.ninja"),
        };

        // Limit the returned facts to 20
        public static int LimitFactsCount(int factsCount)
        {
            int limitedFactsCount = factsCount;

            if (limitedFactsCount < 20)
            {
                limitedFactsCount = 20;
            }

            return factsCount;
        }
    }
}