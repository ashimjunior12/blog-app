import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { data } from '../../data/data.jsx';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
// import ReactMarkdown from 'react-markdown';
import { Textarea } from '@/components/ui/textarea';
import { Car } from 'lucide-react';
import rehypeRaw from 'rehype-raw';
import ReactQuill from 'react-quill';
import MyEditor from './Editor.jsx';

// import YourArticles from './YourArticles.jsx';






const BlogPost = () => {
  const [expandedPosts, setExpandedPosts] = useState({});
  const [markDown,setMarkDown] = useState('')
  const [displayWrite,setDisplayWrite] = useState(false)
  
 
  const toggleReadMore = (id) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id], 
    }));
  };

 

  return (
    <>
      <h3 className='text-center w-4/5 my-0 mx-auto pt-10 font-mono capitalize text-3xl'>
        writings that <br /> will inspire you <hr />
      </h3>
      <section className=' flex flex-col gap-8 lg:grid grid-cols-2 w-4/5 my-0 mx-auto pt-10 pb-10'>
        {data.map((blog) => {
          const { id, conclusion, content, description, title } = blog;
          return (
            <Card key={id}>
              <CardHeader>
                <CardTitle className='font-mono text-2xl font-bold'>
                  {title}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <button
                className='capitalize text-blue-500 hover:underline hover:cursor:pointer pl-5 mb-5'
                onClick={() => toggleReadMore(id)}
              >
                {expandedPosts[id] ? 'Read Less' : 'Read More'}
              </button>

              {expandedPosts[id] && (
                <>
                  <CardContent>
                    {Object.keys(content).map((key) => (
                      <div key={key} className='mb-2 text-gray-500 text-sm'>
                        {key}: {content[key]}
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <p>
                      <span className='font-bold'>Conclusion:</span>{' '}
                      {conclusion}
                    </p>
                  </CardFooter>
                </>
              )}
            </Card>
          );
        })}
        <Card>
          <CardHeader>
            <CardTitle className='font-mono text-1xl font-bold'>
              Publish your own article
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* <Dialog className='w-11/12'>
              <DialogTrigger>
                <Button className='bg-blue-600'>
                  {markDown ? 'Edit' : 'Write'}
                </Button>
              </DialogTrigger> */}

            <Button className='bg-blue-600' onClick={()=>setDisplayWrite(true)} >Write</Button>

            {displayWrite && <MyEditor displayWrite={displayWrite} setDisplayWrite={setDisplayWrite}/>}

              {/* <section className='flex mt-4'> */}
                {/* <DialogContent className='w-11/12'>
                  <DialogHeader>
                    <section className='markdown p-3 w-11/12'>
                      <MyEditor />
                    </section>
                  </DialogHeader>
                </DialogContent> */}

                {/* <Card className='w-full'>
                  {!markDown && (
                    <section className='flex justify-center'>
                      <p className='text-gray-400 mt-5 font-mono'>
                        Your writing will be <br /> Displayed here
                      </p>
                    </section>
                  )}

                  <section className='p-3 '>
                    <section className='p-3 text-black bg-white'> */}

                {/* MarkDown */}
                {/* <ReactMarkdown
                        className='markdown font-mono'
                        rehypePlugins={[rehypeRaw]}
                      >
                        {markDown}
                      </ReactMarkdown>
                      */}

                {/* </section>
                  </section>
                </Card> */}
              {/* </section>
            </Dialog> */}
          </CardContent>
        </Card>
      </section>
      {/* <YourArticles markDown={markDown} /> */}
    </>
  );
};

export default BlogPost;
