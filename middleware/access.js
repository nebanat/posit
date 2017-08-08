/*eslint-disable */
import decode from 'jwt-decode'

export function getAccessToken(req,res){
    const accessToken = req.body.token || req.query.token || req.headers['x-access-token'];
    return accessToken;
}
export function getAccessId(){
  const token = decode(getAccessToken());
  accessId=token.user.id;
  
  return accessId
}  