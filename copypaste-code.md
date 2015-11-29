GitHub auth

```
'https://github.com/login/oauth/authorize?' + x
```

```
{
  scope: 'user,repo',
  redirect_uri: {something} + '/auth/callback',
  client_id: 'f8dd69187841cdd22a26'
}
```

```
http://labelr-dev.herokuapp.com/authenticate/CODE'
```
Repo Item
```
<div>
  <a href=""><span className='octicon octicon-repo'></span></a>
</div>
```

Repo Detail

```
<div className='container'>
  <h1></h1>
  <p></p>
  <ul></ul>
</div>
```

Labels

```
<form className='label'>
  <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
  <input name='name'/>
  <input name='color'/>
  <button type='submit' className='button button-small'>Save</button>
  <button type='button' className='button button-small button-unstyled'>cancel</button>
</form>
```

```
<div className='label'>
  <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
  <span></span>
  <span className='octicon octicon-pencil'></span>
  <span className='octicon octicon-x'></span>
</div>
```
