import {apiBaseURL} from './Constants.js';
import { ShowLoader, HideLoader } from '../component/loaderComponent.js';
import { ShowModal } from '../component/modalComponent.js';


const baseUrl = apiBaseURL;

export const Get = async (url) => {
  try{
    ShowLoader();
    url = `${baseUrl}${url}`;    
    var data = await fetch(url);
    var result = await data.json();
    if(!result.Status){
      result.Message = (typeof result.Message == 'object') ? result.Message.toString() : result.Message;
      ShowModal({
        title: 'Failure',
        message: result.Message
      });
    }
    return result;
  }  
  catch(error){
    return error;
  }finally{
    HideLoader();
  }
}

export const Post = async (url, dataObj) => {
    url = `${baseUrl}${url}`;
    try{
      ShowLoader();
      var data = await fetch(url, {
            method: "POST",
            body: JSON.stringify(dataObj),
            headers: {
                "Content-type": "application/json"
            }
        });
        var result = await data.json();
        if(!result.Status){
          result.Message = (typeof result.Message == 'object') ? result.Message.toString() : result.Message;
          ShowModal({
            title: 'Failure',
            message: result.Message
          });
        }
        return result;     
    }catch(error){
        return error;
    }finally{
      HideLoader();
    }
}