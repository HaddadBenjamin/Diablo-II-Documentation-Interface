export interface IDictionary<ValueType>
{
    Add(key: string, value: ValueType) : void;
    ContainsKey(key: string) : boolean;
    Count() : number;
    GetValueOrDefault(key: string) : ValueType;
    Keys() : string[];
    Remove(key: string) : ValueType;
    Values() : ValueType[];
}

export default IDictionary;