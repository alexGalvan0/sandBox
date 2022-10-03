const apiKey ='oZ3eyA5UiQi4R8DC13nQEk_szo2VumDHpCHFX8zMICd2OS-1x8eZgII_NrafJh2n4anEHRbKj1T1I40rKderB_fDKcnQLQZZh3BXqNOL3byZRfwFcwHsTAoRgxc7Y3Yx';
// client ID : nxS67I04wcNhx-Ikf4dmYg

async function getYelpInfo(){
    let url = 'https://api.yelp.com/v3/businesses/search';
    let response = await axios.get(url)
    console.log(response)
}
getYelpInfo()