using Newtonsoft.Json;

public class facts
{
    [JsonProperty("current_page")]
    public long? CurrentPage { get; set; }

    [JsonProperty("data")]
    public List<Datum>? Data { get; set; }

    [JsonProperty("first_page_url")]
    public Uri? FirstPageUrl { get; set; }

    [JsonProperty("from")]
    public long? From { get; set; }
    
    [JsonProperty("last_page")]
    public long? LastPage { get; set; }

    [JsonProperty("last_page_url")]
    public Uri? LastPageUrl { get; set; }

    [JsonProperty("links")]
    public List<Link>? Links { get; set; }

    [JsonProperty("next_page_url")]
    public Uri? NextPageUrl { get; set; }

    [JsonProperty("path")]
    public Uri? Path { get; set; }

    [JsonProperty("per_page")]
    public long? PerPage { get; set; }

    [JsonProperty("prev_page_url")]
    public object? PrevPageUrl { get; set; }

    [JsonProperty("to")]
    public long? To { get; set; }

    [JsonProperty("total")]
    public long? Total { get; set; }
}

public class Datum
{
    [JsonProperty("facts")]
    public string? Fact { get; set; }

    [JsonProperty("length")]
    public long? Length { get; set; }
}

public class Link
{
    [JsonProperty("url")]
    public Uri? Url { get; set; }

    [JsonProperty("label")]
    public string? Label { get; set; }

    [JsonProperty("active")]
    public bool Active { get; set; }
}