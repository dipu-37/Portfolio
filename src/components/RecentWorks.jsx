import works from "../data/works";

const RecentWorks = () => {
    return (
      <section className="p-6">
        <h3 className="text-xl font-semibold mb-2">Recent Works</h3>
        <div className="grid gap-4">
          {works.map((work, index) => (
            <div key={index} className="p-4 border rounded shadow-sm">
              <h4 className="font-bold text-lg">{work.title}</h4>
              <p>{work.description}</p>
              <a href={work.link} className="text-blue-500 underline mt-1 inline-block">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default RecentWorks;