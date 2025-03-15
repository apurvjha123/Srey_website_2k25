// EventContentData.ts

export interface EventContent {
    title: string;
    description: string;
    rules: string;
    aboutUs: string;
    registrationLink: string;
    galleryImages?: string[];
  }
  
  export interface EventContentData {
    [key: string]: EventContent;
  }
  
  const eventContentData: EventContentData = {
    'table-tennis': {
      title: 'Table Tennis',
      description: 'Competitive table tennis tournament',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Matches will be played in best of 3 format. Players must bring their own paddles. Tournament will follow knockout format.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The Table Tennis club at St. Thomas College has been active since 2010 and has produced several state-level players.',
      registrationLink: 'https://forms.google.com/tabletennis',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/tt1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/tt2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/tt3.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/tt4.jpg',
      ]
    },
    'chess': {
      title: 'Chess',
      description: 'Strategic chess competition',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Standard FIDE rules apply. Time control is 15+10. Arbiter\'s decision is final.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Chess has been a key intellectual sport at our college with several rated players among our alumni.',
      registrationLink: 'https://forms.google.com/chess',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/chess1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/chess2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/chess3.jpg',
      ]
    },
    'carrom': {
      title: 'Carrom',
      description: 'Carrom board championship',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Standard carrom federation rules apply. Players must report 15 minutes before scheduled match time.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Carrom has been a traditional favorite at St. Thomas College with annual tournaments since 2005.',
      registrationLink: 'https://forms.google.com/carrom',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/carrom1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/carrom2.jpg',
      ]
    },
    'badminton': {
      title: 'Badminton',
      description: 'Singles and doubles badminton matches',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. BWF rules apply. Players must bring their own rackets. Shuttlecocks will be provided by the organizers.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The badminton court at St. Thomas College was renovated in 2023 and now features professional quality flooring.',
      registrationLink: 'https://forms.google.com/badminton',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/badminton1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/badminton2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/badminton3.jpg',
      ]
    },
    'pixcellence': {
      title: 'Pixcellence',
      description: 'Photography competition',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Photos must be original work. Editing is allowed but must be disclosed. Theme will be announced on the day of the event.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pixcellence is our flagship photography competition that has discovered several talented photographers over the years.',
      registrationLink: 'https://forms.google.com/pixcellence',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/photo1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/photo2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/photo3.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/photo4.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/photo5.jpg',
      ]
    },
    'film-making': {
      title: 'Film Making',
      description: 'Short film competition',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Films must be 5-10 minutes long. Theme will be provided. Submission deadline is 48 hours after theme announcement.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our film making competition has been a platform for budding directors to showcase their talent and creativity.',
      registrationLink: 'https://forms.google.com/filmmaking',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/film1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/film2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/film3.jpg',
      ]
    },
    'ipl-mock-auction': {
      title: 'IPL Mock Auction',
      description: 'Simulated IPL team auction',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teams will have a virtual budget of 80 crores. Player list will be provided 2 days before the event.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The IPL Mock Auction is one of our most popular events that tests participants\' strategic thinking and cricket knowledge.',
      registrationLink: 'https://forms.google.com/iplauction',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/ipl1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/ipl2.jpg',
      ]
    },
    'hackathon': {
      title: 'Hackathon',
      description: '24-hour coding competition',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teams of 2-4 members. Problem statements will be revealed at the start of the event. Teams must bring their own laptops.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our hackathon brings together the brightest minds to solve real-world problems through innovative technology solutions.',
      registrationLink: 'https://forms.google.com/hackathon',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack3.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack4.jpg',
      ]
    },
    'mini-games': {
      title: 'Mini Games',
      description: '24-hour coding competition',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teams of 2-4 members. Problem statements will be revealed at the start of the event. Teams must bring their own laptops.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our hackathon brings together the brightest minds to solve real-world problems through innovative technology solutions.',
      registrationLink: 'https://forms.google.com/hackathon',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack3.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/hack4.jpg',
      ]
    },
    'sketchify': {
      title: 'Sketchify',
      description: 'Sketching and drawing contest',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Participants must bring their own stationery. \nTheme will be announced on the spot. Duration is 2 hours.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sketchify celebrates artistic talent and provides a platform for artists to express their creativity through sketching.',
      registrationLink: 'https://forms.google.com/sketchify',
      galleryImages: [
        '/scene2-d14f31-compressed-da7d54.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/sketch2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/sketch3.jpg',
      ]
    },
    'playtopia': {
      title: 'Playtopia',
      description: 'Interactive gaming competition',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Participants must register in teams of 2. Games will be announced on the day of the event.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Playtopia is our flagship gaming event where participants compete in a variety of video and board games.',
      registrationLink: 'https://forms.google.com/playtopia',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/play1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/play2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/play3.jpg',
      ]
    },
    'mystic-map': {
      title: 'Mystic Map',
      description: 'Treasure hunt with cryptic clues',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teams of 3-5 members. Clues will be provided at different checkpoints. First team to reach the final destination wins.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mystic Map challenges participants with cryptic clues and puzzles in an exciting treasure hunt across the campus.',
      registrationLink: 'https://forms.google.com/mysticmap',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/map1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/map2.jpg',
      ]
    },
    'quiz': {
      title: 'Quiz',
      description: 'General knowledge quiz competition',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teams of 2 members. Multiple rounds including written, audio-visual, and rapid fire rounds.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our quiz competition tests participants\' knowledge across various domains including science, history, sports, and pop culture.',
      registrationLink: 'https://forms.google.com/quiz',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/quiz1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/quiz2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/quiz3.jpg',
      ]
    },
    'robotics': {
      title: 'Robotics',
      description: 'Robot building and programming challenge',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teams will be provided with robotics kits. Tasks will be announced on the spot. Time limit is 4 hours.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The robotics competition challenges participants to build and program robots to complete specific tasks.',
      registrationLink: 'https://forms.google.com/robotics',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/robot1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/robot2.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/robot3.jpg',
      ]
    },
    'coding': {
      title: 'Coding',
      description: 'Competitive programming contest',
      rules: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Individual participation. Problems will range from easy to hard. Time limit is 3 hours.',
      aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our coding competition tests participants\' problem-solving skills and knowledge of algorithms and data structures.',
      registrationLink: 'https://forms.google.com/coding',
      galleryImages: [
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/code1.jpg',
        'https://de34i7k6qwgwc.cloudfront.net/uploads/img/code2.jpg',
      ]
    },
  };
  
  export default eventContentData;