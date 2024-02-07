"use client"
import { Client, Databases, ID } from "appwrite";

export default function Home() {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c2970cc45f1f2a9530');

  client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65c2970cc45f1f2a9530');
  
  const databases = new Databases(client);

  const a = [
    {
      "title": "The Power of Positive Thinking",
      "content": "<p>Positive thinking can have a profound impact on our lives. It can improve our mental and physical well-being, enhance our relationships, and even increase our chances of success. By focusing on the good in every situation and maintaining an optimistic outlook, we can overcome challenges more easily and attract positive outcomes. Research has shown that positive thinking can reduce stress, boost our immune system, and increase our overall happiness. So let's embrace the power of positive thinking and watch as our lives transform for the better!</p>",
      "slug": "the-power-of-positive-thinking",
      "views": 1256,
      "author": "Jane Doe",
      "is_published": true
    },
    {
      "title": "The Benefits of Regular Exercise",
      "content": "<p>Regular exercise is essential for maintaining good health and well-being. It helps to improve cardiovascular health, strengthen muscles, and increase flexibility. Exercise also plays a crucial role in weight management and can reduce the risk of chronic diseases such as diabetes and heart disease. Additionally, exercise has been shown to have a positive impact on mental health, reducing symptoms of anxiety and depression and improving overall mood. So make time for exercise in your daily routine and reap the many benefits it has to offer!</p>",
      "slug": "the-benefits-of-regular-exercise",
      "views": 987,
      "author": "John Smith",
      "is_published": true
    },
    {
      "title": "The Art of Time Management",
      "content": "<p>Effective time management is key to achieving success in both personal and professional life. By prioritizing tasks, setting realistic goals, and avoiding distractions, we can make the most of our time and accomplish more in less time. Time management also helps to reduce stress and improve overall productivity. By learning to manage our time effectively, we can create a better work-life balance and enjoy greater satisfaction in all areas of our lives.</p>",
      "slug": "the-art-of-time-management",
      "views": 754,
      "author": "Emily Brown",
      "is_published": true
    },
    {
      "title": "Healthy Eating Habits for a Better Life",
      "content": "<p>Healthy eating is essential for maintaining good health and preventing chronic diseases. By consuming a balanced diet rich in fruits, vegetables, whole grains, and lean proteins, we can nourish our bodies with essential nutrients and maintain a healthy weight. It's also important to limit the consumption of processed foods, sugary snacks, and unhealthy fats. By making small changes to our eating habits, we can improve our overall health and well-being and enjoy a better quality of life.</p>",
      "slug": "healthy-eating-habits-for-a-better-life",
      "views": 632,
      "author": "Michael Johnson",
      "is_published": true
    },
    {
      "title": "The Importance of Goal Setting",
      "content": "<p>Setting goals is essential for achieving success in both personal and professional life. Goals provide direction and motivation, helping us to focus our efforts and make progress towards our desired outcomes. By setting specific, measurable, achievable, relevant, and time-bound (SMART) goals, we can increase our chances of success and overcome obstacles more effectively. So take the time to set meaningful goals and watch as your dreams become a reality!</p>",
      "slug": "the-importance-of-goal-setting",
      "views": 875,
      "author": "Sarah Williams",
      "is_published": true
    },
    {
      "title": "The Benefits of Mindfulness Meditation",
      "content": "<p>Mindfulness meditation is a powerful practice that can have a profound impact on our mental and emotional well-being. By cultivating present moment awareness and non-judgmental acceptance, mindfulness meditation helps to reduce stress, anxiety, and depression, and improve overall mood and happiness. Research has shown that regular mindfulness meditation can also improve focus and concentration, enhance self-awareness, and promote emotional resilience. So take a few minutes each day to practice mindfulness meditation and experience the many benefits it has to offer!</p>",
      "slug": "the-benefits-of-mindfulness-meditation",
      "views": 1123,
      "author": "David Wilson",
      "is_published": true
    },
    {
      "title": "Tips for Effective Communication",
      "content": "<p>Effective communication is essential for building strong relationships, both personally and professionally. By listening actively, expressing yourself clearly and assertively, and being open to feedback, you can improve your communication skills and strengthen your connections with others. It's also important to be mindful of non-verbal cues such as body language and facial expressions, as these can greatly impact how your message is received. By practicing good communication habits, you can enhance your relationships and achieve greater success in all areas of your life.</p>",
      "slug": "tips-for-effective-communication",
      "views": 1456,
      "author": "Laura Taylor",
      "is_published": true
    },
    {
      "title": "The Benefits of Gratitude",
      "content": "<p>Practicing gratitude is a simple yet powerful way to improve your overall well-being and happiness. By focusing on the positive aspects of your life and expressing appreciation for the things you have, you can cultivate a more positive outlook and reduce feelings of stress and anxiety. Research has shown that gratitude can also improve physical health, enhance self-esteem, and strengthen relationships with others. So take a moment each day to reflect on the things you're grateful for, and watch as your life becomes filled with joy and abundance!</p>",
      "slug": "the-benefits-of-gratitude",
      "views": 987,
      "author": "James Miller",
      "is_published": true
    },
    {
      "title": "The Importance of Self-Care",
      "content": "<p>Self-care is essential for maintaining good physical, mental, and emotional health. By prioritizing your own needs and taking time to rest, relax, and recharge, you can reduce stress, prevent burnout, and improve overall well-being. Self-care activities can include anything that helps you to feel rejuvenated and refreshed, such as exercise, meditation, spending time with loved ones, or engaging in hobbies and interests. By making self-care a priority in your daily routine, you can enhance your quality of life and better cope with the challenges of everyday life.</p>",
      "slug": "the-importance-of-self-care",
      "views": 632,
      "author": "Emma Wilson",
      "is_published": true
    }
  ]
  for(let i=0;i<a.length;i++){
    const promise = databases.createDocument(
      '65c29bc1a991361f99ec',
      '65c29bcc9efb10d8faeb',
      ID.unique(),
      a[i]
    );
    
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    })
  }
}

