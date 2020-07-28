import manunited from '../images/manunited.png'
import arsenal from '../images/arsenal.png'
import blackburn from '../images/blackburn.png'
import chelsea from '../images/chelsea.png'
import coventry from '../images/coventry.png'
import everton from '../images/everton.png'
import leeds from '../images/leeds.png'
import leicester from '../images/leicester.png'
import liverpool from '../images/liverpool.png'
import mancity from '../images/mancity.png'
import newcastle from '../images/newcastle.png'
import portsmouth from '../images/portsmouth.png'
import sunderland from '../images/sunderland.png'
import tottenham from '../images/tottenham.png'
import wigan from '../images/wigan.png'

const england = {
    stringCode: 'england',
    champions:{
        2020: 'liverpool',
        2019: 'manchester city',
        2018: 'manchester city',
        2017: 'chelsea',
        2016: 'leicester',
        2015: 'chelsea',
        2014: 'manchester city',
        2013: 'manchester united',
        2012: 'manchester city',
        2011: 'manchester united',
        2010: 'chelsea',
        2009: 'manchester united',
        2008: 'manchester united',
        2007: 'manchester united',
        2006: 'chelsea',
        2005: 'chelsea',
        2004: 'arsenal',
        2003: 'manchester united',
        2002: 'arsenal',
        2001: 'manchester united',
        2000: 'manchester united',
        1999: 'manchester united',
        1998: 'arsenal',
        1997: 'manchester united',
        1996: 'manchester united',
        1995: 'blackburn',
        1994: 'manchester united',
        1993: 'manchester united'
    },
    goalscorers: {
        2019: [{
            stringCode: 'aubameyang',
            club: 'arsenal',
            goals: 22
        },{
            stringCode: 'salah',
            club: 'liverpool',
            goals: 22
        },{
            stringCode: 'mane',
            club: 'liverpool',
            goals: 22
        }],
        2018: [{
            stringCode: 'salah',
            club: 'liverpool',
            goals: 32
        }],
        2017: [{
            stringCode: 'kane',
            club: 'tottenham',
            goals: 29
        }],
        2016: [{
            stringCode: 'kane',
            club: 'tottenham',
            goals: 25
        }],
        2015: [{
            stringCode: 'aguero',
            club: 'manchester city',
            goals: 26
        }],
        2014: [{
            stringCode: 'suarez',
            club: 'liverpool',
            goals: 31
        }],
        2013: [{
            stringCode: 'vanpersie',
            club: 'manchester united',
            goals: 26
        }],
        2012: [{
            stringCode: 'vanpersie',
            club: 'arsenal',
            goals: 30
        }],
        2011: [{
            stringCode: 'berbatov',
            club: 'manchester united',
            goals: 20
        },{
            stringCode: 'tevez',
            club: 'manchester city',
            goals: 20
        }],
        2010: [{
            stringCode: 'drogba',
            club: 'chelsea',
            goals: 29
        }],
        2009: [{
            stringCode: 'anelka',
            club: 'chelsea',
            goals: 19
        }],
        2008: [{
            stringCode: 'cronaldo',
            club: 'manchester united',
            goals: 31
        }],
        2007: [{
            stringCode: 'drogba',
            club: 'chelsea',
            goals: 20
        }],
        2006: [{
            stringCode: 'henry',
            club: 'arsenal',
            goals: 27
        }],
        2005: [{
            stringCode: 'henry',
            club: 'arsenal',
            goals: 25
        }],
        2004: [{
            stringCode: 'henry',
            club: 'arsenal',
            goals: 30
        }],
        2003: [{
            stringCode: 'vannistelrooij',
            club: 'manchester united',
            goals: 24
        }],
        2002: [{
            stringCode: 'henry',
            club: 'arsenal',
            goals: 24
        }],
        2001: [{
            stringCode: 'hasselbaink',
            club: 'chelsea',
            goals: 23
        }],
        2000: [{
            stringCode: 'phillips',
            club: 'sunderland',
            goals: 30
        }],
        1999: [{
            stringCode: 'hasselbaink',
            club: 'leeds',
            goals: 18
        },{
            stringCode: 'owen',
            club: 'liverpool',
            goals: 18
        },{
            stringCode: 'yorke',
            club: 'manchester united',
            goals: 22
        }],
        1998: [{
            stringCode: 'sutton',
            club: 'blackburn',
            goals: 18
        },{
            stringCode: 'dublin',
            club: 'coventry',
            goals: 18
        },{
            stringCode: 'owen',
            club: 'liverpool',
            goals: 18
        }],
        1997: [{
            stringCode: 'shearer',
            club: 'newcastle',
            goals: 25
        }],
        1996: [{
            stringCode: 'shearer',
            club: 'blackburn',
            goals: 31
        }],
        1995: [{
            stringCode: 'shearer',
            club: 'blackburn',
            goals: 34
        }],
        1994: [{
            stringCode: 'cole',
            club: 'newcastle',
            goals: 34
        }],
        1993: [{
            stringCode: 'sheringham',
            club: 'nottingham Forest/tottenham',
            goals: 22
        }]
    },
    cupWinners:{
        2019: 'manchester city',
        2018: 'chelsea',
        2017: 'arsenal',
        2016: 'manchester united',
        2015: 'arsenal',
        2014: 'arsenal',
        2013: 'wigan',
        2012: 'chelsea',
        2011: 'manchester city',
        2010: 'chelsea',
        2009: 'chelsea',
        2008: 'portsmouth',
        2007: 'chelsea',
        2006: 'liverpool',
        2005: 'arsenal',
        2004: 'manchester united',
        2003: 'arsenal',
        2002: 'arsenal',
        2001: 'liverpool',
        2000: 'chelsea',
        1999: 'manchester united',
        1998: 'arsenal',
        1997: 'chelsea',
        1996: 'manchester united',
        1995: 'everton',
        1994: 'manchester united',
        1993: 'arsenal'
    },
    clubs: {
        'manchester united': {
            name: 'Manchester United',
            logoUrl: manunited
        }, 
        arsenal: {
            name: 'Arsenal',
            logoUrl: arsenal
        },
        blackburn: {
            name: 'Blackburn',
            logoUrl: blackburn
        },
        chelsea: {
            name: 'Chelsea',
            logoUrl: chelsea
        },
        coventry: {
            name: 'Coventry',
            logoUrl: coventry
        },
        everton: {
            name: 'Everton',
            logoUrl: everton
        },
        leeds: {
            name: 'Leeds',
            logoUrl: leeds
        },
        leicester: {
            name: 'Leicester',
            logoUrl: leicester
        },
        liverpool: {
            name: 'Liverpool',
            logoUrl: liverpool
        },
        "manchester city": {
            name: 'Manchester City',
            logoUrl: mancity
        },
        newcastle: {
            name: 'Newcastle',
            logoUrl: newcastle
        },
        portsmouth: {
            name: 'Portsmouth',
            logoUrl: portsmouth
        },
        sunderland: {
            name: 'Sunderland',
            logoUrl: sunderland
        },
        tottenham: {
            name: 'Tottenham',
            logoUrl: tottenham
        },
        wigan: {
            name: 'Wigan',
            logoUrl: wigan
        },
        'nottingham Forest/tottenham': {
            name: 'Nottingham Forest/Tottenham',
            logoUrl: ''
        }
    },
}

export default england