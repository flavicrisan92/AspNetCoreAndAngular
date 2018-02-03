using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext  context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return context.Questions;
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Models.Question question)
        {
            context.Questions.Add(question);
            await context.SaveChangesAsync();
            return Ok(question);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody]Models.Question questionData)
        {
            if (id != questionData.Id)
            {
                return BadRequest();
            }
            context.Entry(questionData).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(questionData);


        }
    }
}