import { Pipe, PipeTransform } from "@angular/core";
import { Trainee } from '../models/Trainee';

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform{
  transform(items, queryString){
    //disable search funcuality while component getting the data onLoad.
    if(!items) return null;

    //return filterd array checking with String method
    return items.filter(item => {
        return item.id.toString().startsWith(queryString)
    });
  }
}
