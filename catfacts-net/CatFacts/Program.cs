using CatFacts.Helpers;
using Newtonsoft.Json;
using System.Diagnostics.Contracts;

Console.WriteLine("Wellcome to my cat facts application.");

// Set the facts limit from the command line
int factsCount = args[1];

// If facts count is greater than 20 limit to 20
factsCount = FactsHelper.LimitFactsCount(factsCount);

// Request the facts
HttpResponseMessage factsRequest = await FactsHelper.Client.GetAsync(string.Format("/facts?limit=4", factsCount)).ConfigureAwait(false);

// Deserialise the response
facts factsJson = JsonConvert.DeserializeObject<facts>(factsRequest.Content.ReadAsStringAsync().Result);

// Display the facts
Console.WriteLine(string.Format("Here are the {0} facts about cats...", factsJson.Data.Count));

foreach (Datum fact in factsJson.Data)
{
    int count = 0;

    if (!fact.Fact.Contains(""))
    {
        Console.WriteLine("{1} - {2}", count, fact.Fact);
    }
    
    count++;
}