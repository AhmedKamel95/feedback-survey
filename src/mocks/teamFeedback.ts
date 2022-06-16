import { feedbackCollection } from 'context/ShareFeedbackProvider'

const mockedTeamFeedback: feedbackCollection[] = [
  {
    member: {
      avatarUrl: 'https://i.pravatar.cc/150?img=48',
      id: 'p1',
      name: 'Martha Liberty',
    },
    feedback: [
      {
        id: 'q1',
        type: 'scale',
        required: true,
        label:
          'How much do you trust this person to deliver high quality work?',
        value: 3,
        skipped: false,
      },
      {
        id: 'q2',
        type: 'multipleChoice',
        required: true,
        label:
          'Is this person up to date with the latest accounting regulations?',
        options: [
          {
            value: 1,
            label:
              'Not fully. You should work on trying to stay more up to date with regulations',
          },
          {
            value: 2,
            label: 'Yes, you are reasonably up to date with new regulations.',
          },
          {
            value: 3,
            label:
              'Yes, you are the one I look up to when I need information about new regulations',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q3',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand the technical domain of our product?',
        value: 8,
        skipped: false,
      },
      {
        id: 'q4',
        type: 'text',
        required: false,
        label:
          'Have there been any situations where this person could have managed their emotions better? What happened?',
        value: null,
        skipped: true,
      },
      {
        id: 'q5',
        type: 'multipleChoice',
        required: true,
        label:
          'Does this person care about our users and treats customer support as a high priority?',
        options: [
          {
            value: 1,
            label: 'Not always - you should work on this aspect',
          },
          {
            value: 2,
            label:
              'Yes, you go out of our way to help our users and improve their experience',
          },
          {
            value: 3,
            label:
              'Yes, your understanding of our users and the empathy you demonstrate is second to none',
          },
        ],
        value: 2,
        skipped: false,
      },
      {
        id: 'q6',
        type: 'text',
        required: true,
        label:
          'What would you like this person to work on the most during the next month, to enable their continued growth?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q7',
        type: 'multipleChoice',
        required: true,
        label:
          "How transparent and clear are this person's plans and work tasks?",
        options: [
          {
            value: 1,
            label:
              'I frequently not know what you are working on, please work with me to raise visibility',
          },
          {
            value: 2,
            label:
              'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
          },
          {
            value: 3,
            label:
              'Your plans are clear and readily available to those around you, and I always know what the next step is.',
          },
        ],
        value: 2,
        skipped: false,
      },
      {
        id: 'q8',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand our business goals and roadmap?',
        value: 7,
        skipped: false,
      },
      {
        id: 'q9',
        type: 'text',
        required: false,
        label: "Is there anything else you'd like to share with this person?",
        value: 'Dummy feedback text',
        skipped: false,
      },
    ],
  },
  {
    member: {
      avatarUrl: 'https://i.pravatar.cc/100?u=p2',
      id: 'p2',
      name: 'Persephone Woodley',
    },
    feedback: [
      {
        id: 'q1',
        type: 'scale',
        required: true,
        label:
          'How much do you trust this person to deliver high quality work?',
        value: 8,
        skipped: false,
      },
      {
        id: 'q2',
        type: 'multipleChoice',
        required: true,
        label:
          'Is this person up to date with the latest accounting regulations?',
        options: [
          {
            value: 1,
            label:
              'Not fully. You should work on trying to stay more up to date with regulations',
          },
          {
            value: 2,
            label: 'Yes, you are reasonably up to date with new regulations.',
          },
          {
            value: 3,
            label:
              'Yes, you are the one I look up to when I need information about new regulations',
          },
        ],
        value: 3,
        skipped: false,
      },
      {
        id: 'q3',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand the technical domain of our product?',
        value: 10,
        skipped: false,
      },
      {
        id: 'q4',
        type: 'text',
        required: false,
        label:
          'Have there been any situations where this person could have managed their emotions better? What happened?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q5',
        type: 'multipleChoice',
        required: true,
        label:
          'Does this person care about our users and treats customer support as a high priority?',
        options: [
          {
            value: 1,
            label: 'Not always - you should work on this aspect',
          },
          {
            value: 2,
            label:
              'Yes, you go out of our way to help our users and improve their experience',
          },
          {
            value: 3,
            label:
              'Yes, your understanding of our users and the empathy you demonstrate is second to none',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q6',
        type: 'text',
        required: true,
        label:
          'What would you like this person to work on the most during the next month, to enable their continued growth?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q7',
        type: 'multipleChoice',
        required: true,
        label:
          "How transparent and clear are this person's plans and work tasks?",
        options: [
          {
            value: 1,
            label:
              'I frequently not know what you are working on, please work with me to raise visibility',
          },
          {
            value: 2,
            label:
              'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
          },
          {
            value: 3,
            label:
              'Your plans are clear and readily available to those around you, and I always know what the next step is.',
          },
        ],
        value: 3,
        skipped: false,
      },
      {
        id: 'q8',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand our business goals and roadmap?',
        value: 8,
        skipped: false,
      },
      {
        id: 'q9',
        type: 'text',
        required: false,
        label: "Is there anything else you'd like to share with this person?",
        value: 'Dummy feedback text',
        skipped: false,
      },
    ],
  },
  {
    member: {
      avatarUrl: 'https://i.pravatar.cc/100?u=p3',
      id: 'p3',
      name: 'Gertrude Boyle',
    },
    feedback: [
      {
        id: 'q1',
        type: 'scale',
        required: true,
        label:
          'How much do you trust this person to deliver high quality work?',
        value: 6,
        skipped: false,
      },
      {
        id: 'q2',
        type: 'multipleChoice',
        required: true,
        label:
          'Is this person up to date with the latest accounting regulations?',
        options: [
          {
            value: 1,
            label:
              'Not fully. You should work on trying to stay more up to date with regulations',
          },
          {
            value: 2,
            label: 'Yes, you are reasonably up to date with new regulations.',
          },
          {
            value: 3,
            label:
              'Yes, you are the one I look up to when I need information about new regulations',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q3',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand the technical domain of our product?',
        value: 10,
        skipped: false,
      },
      {
        id: 'q4',
        type: 'text',
        required: false,
        label:
          'Have there been any situations where this person could have managed their emotions better? What happened?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q5',
        type: 'multipleChoice',
        required: true,
        label:
          'Does this person care about our users and treats customer support as a high priority?',
        options: [
          {
            value: 1,
            label: 'Not always - you should work on this aspect',
          },
          {
            value: 2,
            label:
              'Yes, you go out of our way to help our users and improve their experience',
          },
          {
            value: 3,
            label:
              'Yes, your understanding of our users and the empathy you demonstrate is second to none',
          },
        ],
        value: 3,
        skipped: false,
      },
      {
        id: 'q6',
        type: 'text',
        required: true,
        label:
          'What would you like this person to work on the most during the next month, to enable their continued growth?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q7',
        type: 'multipleChoice',
        required: true,
        label:
          "How transparent and clear are this person's plans and work tasks?",
        options: [
          {
            value: 1,
            label:
              'I frequently not know what you are working on, please work with me to raise visibility',
          },
          {
            value: 2,
            label:
              'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
          },
          {
            value: 3,
            label:
              'Your plans are clear and readily available to those around you, and I always know what the next step is.',
          },
        ],
        value: 2,
        skipped: false,
      },
      {
        id: 'q8',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand our business goals and roadmap?',
        value: 5,
        skipped: false,
      },
      {
        id: 'q9',
        type: 'text',
        required: false,
        label: "Is there anything else you'd like to share with this person?",
        value: 'Dummy feedback text',
        skipped: false,
      },
    ],
  },
  {
    member: {
      avatarUrl: 'https://i.pravatar.cc/150?img=53',
      id: 'p4',
      name: 'Bertram Patton',
    },
    feedback: [
      {
        id: 'q1',
        type: 'scale',
        required: true,
        label:
          'How much do you trust this person to deliver high quality work?',
        value: 5,
        skipped: false,
      },
      {
        id: 'q2',
        type: 'multipleChoice',
        required: true,
        label:
          'Is this person up to date with the latest accounting regulations?',
        options: [
          {
            value: 1,
            label:
              'Not fully. You should work on trying to stay more up to date with regulations',
          },
          {
            value: 2,
            label: 'Yes, you are reasonably up to date with new regulations.',
          },
          {
            value: 3,
            label:
              'Yes, you are the one I look up to when I need information about new regulations',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q3',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand the technical domain of our product?',
        value: 4,
        skipped: false,
      },
      {
        id: 'q4',
        type: 'text',
        required: false,
        label:
          'Have there been any situations where this person could have managed their emotions better? What happened?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q5',
        type: 'multipleChoice',
        required: true,
        label:
          'Does this person care about our users and treats customer support as a high priority?',
        options: [
          {
            value: 1,
            label: 'Not always - you should work on this aspect',
          },
          {
            value: 2,
            label:
              'Yes, you go out of our way to help our users and improve their experience',
          },
          {
            value: 3,
            label:
              'Yes, your understanding of our users and the empathy you demonstrate is second to none',
          },
        ],
        value: 3,
        skipped: false,
      },
      {
        id: 'q6',
        type: 'text',
        required: true,
        label:
          'What would you like this person to work on the most during the next month, to enable their continued growth?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q7',
        type: 'multipleChoice',
        required: true,
        label:
          "How transparent and clear are this person's plans and work tasks?",
        options: [
          {
            value: 1,
            label:
              'I frequently not know what you are working on, please work with me to raise visibility',
          },
          {
            value: 2,
            label:
              'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
          },
          {
            value: 3,
            label:
              'Your plans are clear and readily available to those around you, and I always know what the next step is.',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q8',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand our business goals and roadmap?',
        value: 3,
        skipped: false,
      },
      {
        id: 'q9',
        type: 'text',
        required: false,
        label: "Is there anything else you'd like to share with this person?",
        value: null,
        skipped: true,
      },
    ],
  },
  {
    member: {
      avatarUrl: 'https://i.pravatar.cc/100?u=p5',
      id: 'p5',
      name: 'Camron Devlin',
    },
    feedback: [
      {
        id: 'q1',
        type: 'scale',
        required: true,
        label:
          'How much do you trust this person to deliver high quality work?',
        value: 9,
        skipped: false,
      },
      {
        id: 'q2',
        type: 'multipleChoice',
        required: true,
        label:
          'Is this person up to date with the latest accounting regulations?',
        options: [
          {
            value: 1,
            label:
              'Not fully. You should work on trying to stay more up to date with regulations',
          },
          {
            value: 2,
            label: 'Yes, you are reasonably up to date with new regulations.',
          },
          {
            value: 3,
            label:
              'Yes, you are the one I look up to when I need information about new regulations',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q3',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand the technical domain of our product?',
        value: 9,
        skipped: false,
      },
      {
        id: 'q4',
        type: 'text',
        required: false,
        label:
          'Have there been any situations where this person could have managed their emotions better? What happened?',
        value: null,
        skipped: true,
      },
      {
        id: 'q5',
        type: 'multipleChoice',
        required: true,
        label:
          'Does this person care about our users and treats customer support as a high priority?',
        options: [
          {
            value: 1,
            label: 'Not always - you should work on this aspect',
          },
          {
            value: 2,
            label:
              'Yes, you go out of our way to help our users and improve their experience',
          },
          {
            value: 3,
            label:
              'Yes, your understanding of our users and the empathy you demonstrate is second to none',
          },
        ],
        value: 3,
        skipped: false,
      },
      {
        id: 'q6',
        type: 'text',
        required: true,
        label:
          'What would you like this person to work on the most during the next month, to enable their continued growth?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q7',
        type: 'multipleChoice',
        required: true,
        label:
          "How transparent and clear are this person's plans and work tasks?",
        options: [
          {
            value: 1,
            label:
              'I frequently not know what you are working on, please work with me to raise visibility',
          },
          {
            value: 2,
            label:
              'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
          },
          {
            value: 3,
            label:
              'Your plans are clear and readily available to those around you, and I always know what the next step is.',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q8',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand our business goals and roadmap?',
        value: 6,
        skipped: false,
      },
      {
        id: 'q9',
        type: 'text',
        required: false,
        label: "Is there anything else you'd like to share with this person?",
        value: 'Dummy feedback text',
        skipped: false,
      },
    ],
  },
  {
    member: {
      avatarUrl: 'https://i.pravatar.cc/100?u=p7',
      id: 'p7',
      name: 'Ember Mcmillan',
    },
    feedback: [
      {
        id: 'q1',
        type: 'scale',
        required: true,
        label:
          'How much do you trust this person to deliver high quality work?',
        value: 10,
        skipped: false,
      },
      {
        id: 'q2',
        type: 'multipleChoice',
        required: true,
        label:
          'Is this person up to date with the latest accounting regulations?',
        options: [
          {
            value: 1,
            label:
              'Not fully. You should work on trying to stay more up to date with regulations',
          },
          {
            value: 2,
            label: 'Yes, you are reasonably up to date with new regulations.',
          },
          {
            value: 3,
            label:
              'Yes, you are the one I look up to when I need information about new regulations',
          },
        ],
        value: 2,
        skipped: false,
      },
      {
        id: 'q3',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand the technical domain of our product?',
        value: 5,
        skipped: false,
      },
      {
        id: 'q4',
        type: 'text',
        required: false,
        label:
          'Have there been any situations where this person could have managed their emotions better? What happened?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q5',
        type: 'multipleChoice',
        required: true,
        label:
          'Does this person care about our users and treats customer support as a high priority?',
        options: [
          {
            value: 1,
            label: 'Not always - you should work on this aspect',
          },
          {
            value: 2,
            label:
              'Yes, you go out of our way to help our users and improve their experience',
          },
          {
            value: 3,
            label:
              'Yes, your understanding of our users and the empathy you demonstrate is second to none',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q6',
        type: 'text',
        required: true,
        label:
          'What would you like this person to work on the most during the next month, to enable their continued growth?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q7',
        type: 'multipleChoice',
        required: true,
        label:
          "How transparent and clear are this person's plans and work tasks?",
        options: [
          {
            value: 1,
            label:
              'I frequently not know what you are working on, please work with me to raise visibility',
          },
          {
            value: 2,
            label:
              'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
          },
          {
            value: 3,
            label:
              'Your plans are clear and readily available to those around you, and I always know what the next step is.',
          },
        ],
        value: 3,
        skipped: false,
      },
      {
        id: 'q8',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand our business goals and roadmap?',
        value: 4,
        skipped: false,
      },
      {
        id: 'q9',
        type: 'text',
        required: false,
        label: "Is there anything else you'd like to share with this person?",
        value: 'Dummy feedback text',
        skipped: false,
      },
    ],
  },
  {
    member: {
      avatarUrl: 'https://i.pravatar.cc/100?u=p6',
      id: 'p6',
      name: 'Jai Malone',
    },
    feedback: [
      {
        id: 'q1',
        type: 'scale',
        required: true,
        label:
          'How much do you trust this person to deliver high quality work?',
        value: 7,
        skipped: false,
      },
      {
        id: 'q2',
        type: 'multipleChoice',
        required: true,
        label:
          'Is this person up to date with the latest accounting regulations?',
        options: [
          {
            value: 1,
            label:
              'Not fully. You should work on trying to stay more up to date with regulations',
          },
          {
            value: 2,
            label: 'Yes, you are reasonably up to date with new regulations.',
          },
          {
            value: 3,
            label:
              'Yes, you are the one I look up to when I need information about new regulations',
          },
        ],
        value: 2,
        skipped: false,
      },
      {
        id: 'q3',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand the technical domain of our product?',
        value: 4,
        skipped: false,
      },
      {
        id: 'q4',
        type: 'text',
        required: false,
        label:
          'Have there been any situations where this person could have managed their emotions better? What happened?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q5',
        type: 'multipleChoice',
        required: true,
        label:
          'Does this person care about our users and treats customer support as a high priority?',
        options: [
          {
            value: 1,
            label: 'Not always - you should work on this aspect',
          },
          {
            value: 2,
            label:
              'Yes, you go out of our way to help our users and improve their experience',
          },
          {
            value: 3,
            label:
              'Yes, your understanding of our users and the empathy you demonstrate is second to none',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q6',
        type: 'text',
        required: true,
        label:
          'What would you like this person to work on the most during the next month, to enable their continued growth?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q7',
        type: 'multipleChoice',
        required: true,
        label:
          "How transparent and clear are this person's plans and work tasks?",
        options: [
          {
            value: 1,
            label:
              'I frequently not know what you are working on, please work with me to raise visibility',
          },
          {
            value: 2,
            label:
              'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
          },
          {
            value: 3,
            label:
              'Your plans are clear and readily available to those around you, and I always know what the next step is.',
          },
        ],
        value: 3,
        skipped: false,
      },
      {
        id: 'q8',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand our business goals and roadmap?',
        value: 9,
        skipped: false,
      },
      {
        id: 'q9',
        type: 'text',
        required: false,
        label: "Is there anything else you'd like to share with this person?",
        value: 'Dummy feedback text',
        skipped: false,
      },
    ],
  },
  {
    member: {
      avatarUrl: 'https://i.pravatar.cc/100?u=p8',
      id: 'p8',
      name: 'Jeanette Hume',
    },
    feedback: [
      {
        id: 'q1',
        type: 'scale',
        required: true,
        label:
          'How much do you trust this person to deliver high quality work?',
        value: 4,
        skipped: false,
      },
      {
        id: 'q2',
        type: 'multipleChoice',
        required: true,
        label:
          'Is this person up to date with the latest accounting regulations?',
        options: [
          {
            value: 1,
            label:
              'Not fully. You should work on trying to stay more up to date with regulations',
          },
          {
            value: 2,
            label: 'Yes, you are reasonably up to date with new regulations.',
          },
          {
            value: 3,
            label:
              'Yes, you are the one I look up to when I need information about new regulations',
          },
        ],
        value: 2,
        skipped: false,
      },
      {
        id: 'q3',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand the technical domain of our product?',
        value: 9,
        skipped: false,
      },
      {
        id: 'q4',
        type: 'text',
        required: false,
        label:
          'Have there been any situations where this person could have managed their emotions better? What happened?',
        value: null,
        skipped: true,
      },
      {
        id: 'q5',
        type: 'multipleChoice',
        required: true,
        label:
          'Does this person care about our users and treats customer support as a high priority?',
        options: [
          {
            value: 1,
            label: 'Not always - you should work on this aspect',
          },
          {
            value: 2,
            label:
              'Yes, you go out of our way to help our users and improve their experience',
          },
          {
            value: 3,
            label:
              'Yes, your understanding of our users and the empathy you demonstrate is second to none',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q6',
        type: 'text',
        required: true,
        label:
          'What would you like this person to work on the most during the next month, to enable their continued growth?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q7',
        type: 'multipleChoice',
        required: true,
        label:
          "How transparent and clear are this person's plans and work tasks?",
        options: [
          {
            value: 1,
            label:
              'I frequently not know what you are working on, please work with me to raise visibility',
          },
          {
            value: 2,
            label:
              'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
          },
          {
            value: 3,
            label:
              'Your plans are clear and readily available to those around you, and I always know what the next step is.',
          },
        ],
        value: 3,
        skipped: false,
      },
      {
        id: 'q8',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand our business goals and roadmap?',
        value: 4,
        skipped: false,
      },
      {
        id: 'q9',
        type: 'text',
        required: false,
        label: "Is there anything else you'd like to share with this person?",
        value: 'Dummy feedback text',
        skipped: false,
      },
    ],
  },
  {
    member: {
      id: 'p9',
      name: 'Harold Hays',
    },
    feedback: [
      {
        id: 'q1',
        type: 'scale',
        required: true,
        label:
          'How much do you trust this person to deliver high quality work?',
        value: 9,
        skipped: false,
      },
      {
        id: 'q2',
        type: 'multipleChoice',
        required: true,
        label:
          'Is this person up to date with the latest accounting regulations?',
        options: [
          {
            value: 1,
            label:
              'Not fully. You should work on trying to stay more up to date with regulations',
          },
          {
            value: 2,
            label: 'Yes, you are reasonably up to date with new regulations.',
          },
          {
            value: 3,
            label:
              'Yes, you are the one I look up to when I need information about new regulations',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q3',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand the technical domain of our product?',
        value: 5,
        skipped: false,
      },
      {
        id: 'q4',
        type: 'text',
        required: false,
        label:
          'Have there been any situations where this person could have managed their emotions better? What happened?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q5',
        type: 'multipleChoice',
        required: true,
        label:
          'Does this person care about our users and treats customer support as a high priority?',
        options: [
          {
            value: 1,
            label: 'Not always - you should work on this aspect',
          },
          {
            value: 2,
            label:
              'Yes, you go out of our way to help our users and improve their experience',
          },
          {
            value: 3,
            label:
              'Yes, your understanding of our users and the empathy you demonstrate is second to none',
          },
        ],
        value: 3,
        skipped: false,
      },
      {
        id: 'q6',
        type: 'text',
        required: true,
        label:
          'What would you like this person to work on the most during the next month, to enable their continued growth?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q7',
        type: 'multipleChoice',
        required: true,
        label:
          "How transparent and clear are this person's plans and work tasks?",
        options: [
          {
            value: 1,
            label:
              'I frequently not know what you are working on, please work with me to raise visibility',
          },
          {
            value: 2,
            label:
              'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
          },
          {
            value: 3,
            label:
              'Your plans are clear and readily available to those around you, and I always know what the next step is.',
          },
        ],
        value: 3,
        skipped: false,
      },
      {
        id: 'q8',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand our business goals and roadmap?',
        value: 6,
        skipped: false,
      },
      {
        id: 'q9',
        type: 'text',
        required: false,
        label: "Is there anything else you'd like to share with this person?",
        value: 'Dummy feedback text',
        skipped: false,
      },
    ],
  },
  {
    member: {
      avatarUrl: 'https://i.pravatar.cc/100?u=p11',
      id: 'p11',
      name: 'Anna-Marie Orr',
    },
    feedback: [
      {
        id: 'q1',
        type: 'scale',
        required: true,
        label:
          'How much do you trust this person to deliver high quality work?',
        value: 9,
        skipped: false,
      },
      {
        id: 'q2',
        type: 'multipleChoice',
        required: true,
        label:
          'Is this person up to date with the latest accounting regulations?',
        options: [
          {
            value: 1,
            label:
              'Not fully. You should work on trying to stay more up to date with regulations',
          },
          {
            value: 2,
            label: 'Yes, you are reasonably up to date with new regulations.',
          },
          {
            value: 3,
            label:
              'Yes, you are the one I look up to when I need information about new regulations',
          },
        ],
        value: 2,
        skipped: false,
      },
      {
        id: 'q3',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand the technical domain of our product?',
        value: 4,
        skipped: false,
      },
      {
        id: 'q4',
        type: 'text',
        required: false,
        label:
          'Have there been any situations where this person could have managed their emotions better? What happened?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q5',
        type: 'multipleChoice',
        required: true,
        label:
          'Does this person care about our users and treats customer support as a high priority?',
        options: [
          {
            value: 1,
            label: 'Not always - you should work on this aspect',
          },
          {
            value: 2,
            label:
              'Yes, you go out of our way to help our users and improve their experience',
          },
          {
            value: 3,
            label:
              'Yes, your understanding of our users and the empathy you demonstrate is second to none',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q6',
        type: 'text',
        required: true,
        label:
          'What would you like this person to work on the most during the next month, to enable their continued growth?',
        value: 'Dummy feedback text',
        skipped: false,
      },
      {
        id: 'q7',
        type: 'multipleChoice',
        required: true,
        label:
          "How transparent and clear are this person's plans and work tasks?",
        options: [
          {
            value: 1,
            label:
              'I frequently not know what you are working on, please work with me to raise visibility',
          },
          {
            value: 2,
            label:
              'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
          },
          {
            value: 3,
            label:
              'Your plans are clear and readily available to those around you, and I always know what the next step is.',
          },
        ],
        value: 1,
        skipped: false,
      },
      {
        id: 'q8',
        type: 'scale',
        required: true,
        label:
          'How well does this person understand our business goals and roadmap?',
        value: 8,
        skipped: false,
      },
      {
        id: 'q9',
        type: 'text',
        required: false,
        label: "Is there anything else you'd like to share with this person?",
        value: 'Dummy feedback text',
        skipped: false,
      },
    ],
  },
]

export default mockedTeamFeedback
