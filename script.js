var personel = [
{
    ad: 'ali',
    soyad: 'yılmaz',
    diller: ['ingilizce']
},
{
    ad: 'kaan',
    soyad: 'yılmaz',
    diller: ['almanca']
},
{
    ad: 'pınar',
    soyad: 'yılmaz',
    diller: ['ingilizce', 'almanca']
}
];

personel.forEach(function(personel){
    console.log('***********************');

    console.log(personel.ad+' '+personel.soyad);

    personel.diller.forEach(function(dil){
        console.log(dil);
    });
        console.log('***********************');
});