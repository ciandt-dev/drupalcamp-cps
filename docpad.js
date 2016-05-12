module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "DrupalCamp Campinas 2016",
      description: "A tradicional DrupalCamp, agora no interior paulista!",
      date: "25 de junho",
      // If your event is free, just comment this line
      //price: "FREE",
      venue: "Faculdade Metrocamp",
      address: "Rua Doutor Salles de Oliveira, 1661 - Vila Industrial",
      city: "Campinas",
      state: "São Paulo",
      logo: "themes/drupalcamp-cps/img/logo.png",
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se gratuitamente!",
        icon: "arrow-right",
        link: "http://www.eventick.com.br/drupalcamp-cps"
    },

    // Site info
    site: {
      theme: "drupalcamp-cps",
      url: "http://campinas2016.drupalcamp.com.br",
      googleanalytics: "UA-77098436-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'arrival',
      'afterhours',
      //'speakers',
      //'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O Evento",
      location: "Localização",
      arrival: "Como chegar",
      afterhours: "Confraternização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Realização",
      partners: "Apoio",
      contact: "Contato"
    },

    // Foundation icon to use at titles: http://zurb.com/playground/foundation-icon-fonts-3
    icons: {
      home: "home",
      about: "star",
      location: "map",
      arrival: "compass",
      afterhours: "like",
      speakers: "megaphone",
      schedule: "calendar",
      sponsors: "check",
      partners: "torsos",
      contact: "mail"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Linus Torvalds",
        photo: "themes/drupalcamp-cps/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Linux Foundation",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Digging into a Linux Kernel",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h00"
        }
      },
      {
        name: "Bill Gates",
        photo: "themes/drupalcamp-cps/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Microsoft",
        link: {
          href: "http://github.com/billy95",
          text: "@billy95"
        },
        presentation: {
          title: "Introducing Windows 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Chuck Norris",
        photo: "themes/drupalcamp-cps/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Steve Jobs",
        photo: "themes/drupalcamp-cps/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://github.com/stevie",
          text: "@stevie"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/drupalcamp-cps/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/drupalcamp-cps/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "CI&T",
        logo: "themes/drupalcamp-cps/img/logo_ciandt.jpg",
        url: "http://ciandt.com"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Metrocamp",
        logo: "themes/drupalcamp-cps/img/metrocamp_logo.png",
        url: "http://metrocamp.com.br"
      },
      {
        name: "Acquia",
        logo: "themes/drupalcamp-cps/img/acquia_logo.png",
        url: "http://acquia.com"
      },
      {
        name: "Associação Drupal Brasil - ADB",
        logo: "themes/drupalcamp-cps/img/adb_logo.png",
        url: "http://drupal.org.br"
      },
      {
        name: "Chuva Inc.",
        logo: "themes/drupalcamp-cps/img/logo_chuva.png",
        url: "https://chuva-inc.com.br/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
