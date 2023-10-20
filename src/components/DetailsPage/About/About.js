import './About.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function About() {
    return (
        <Box container className='box'>
        <Typography className='typo' variant="h3" gutterBottom align='justify'>
        About
      </Typography>
      <Typography className='typo' variant="h4" gutterBottom>
        Hi, Im Afo. Im a FullStack Developer.
      </Typography>
      <Typography className='typo' variant="body1" gutterBottom>
      I dont like to define myself by the work ive done. I define myself by the work i want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
      </Typography>
      <Typography className='typo' variant="body1" gutterBottom>
Fueled by high energy levels and boundless enthusiasm, Im easily inspired and more then willing to follow my fascinations wherever they take me. Im passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. Im never satisfied to just come up with ideas. Instead i have an almost impulsive need to act on them.
      </Typography>
      <Typography className='typo' variant="body1" gutterBottom>
      My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. Im a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
      </Typography>
      <Typography className='typo' variant="body1" gutterBottom>
      I like to develop expertise in a number of areas over the course of my life and career.
      </Typography>
      <Typography className='typo' variant="body1" gutterBottom>
      You can read more about my biography, experience, skills, education and much more in the PDF attached bellow:
      </Typography>
      <Link href="#" className='typo resume' underline="hover">My resume</Link>
      </Box>
      );
}