export default class Servie {

    UpdateData($data){
        setTimeout(() => {
            var data = JSON.parse(window.localStorage.getItem('data'));

            document.getElementById('address').innerHTML = data.address
            document.getElementById('ylexar1').innerHTML = data.ylexar1
            document.getElementById('ylexar2').innerHTML = data.ylexar2
            document.getElementById('ylexar3').innerHTML = data.ylexar3
        
        }, 10);
    }

    Details = ($id) => {
        return this.Data[$id];
    }

    Data = [
        {
            name: 'UTS Business School',
            architect: 'Frank Gehry',
            location: 'Ultimo, Sydney',
            address: '14-28 Ultimo Rd'
        },
        {
            name: 'Binoculars',
            architect: 'Frank Gehry',
            location: 'Los Angeles, California',
            address: '340 Main Street'
        },
        {
            name: 'Fondation',
            architect: 'Frank Gehry',
            location: 'France, Paris',
            address: '8 Avenue du Mahatma-Gandhi'
        },
        {
            name: 'Lou Ruvo Center',
            architect: 'Frank Gehry',
            location: 'Las Vegas, Nevada',
            address: '888 West Bonneville Avenue'
        },
        {
            name: 'Walt Disney Concert Hall',
            architect: 'Frank Gehry',
            location: 'Los Angeles, California',
            address: '111 S Grand Ave, Los Angeles, CA 90012'
        },
        {
            name: 'Twisted Luma Arles Tower',
            architect: 'Frank Gehry',
            location: 'France, Arles',
            address:'33 avenue Victor Hugo'
        }
    ]
}