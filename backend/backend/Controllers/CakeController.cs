using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CakeController : ControllerBase
    {
        private readonly CakeContext _context;

        public CakeController(CakeContext context)
        {
            _context = context;
        }

        // GET: api/Cake
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cake>>> GetCake()
        {
            return await _context.Cake.ToListAsync();
        }

        // GET: api/Cake/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cake>> GetCake(int id)
        {
            var cake = await _context.Cake.FindAsync(id);

            if (cake == null)
            {
                return NotFound();
            }

            return cake;
        }

        // PUT: api/Cake/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCake(int id, Cake cake)
        {
            if (id != cake.Id)
            {
                return BadRequest();
            }

            _context.Entry(cake).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CakeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cake
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<List<Cake>>> CreateCake(Cake cake)
        {
            _context.Cake.Add(cake);
            await _context.SaveChangesAsync();

            return Ok(await _context.Cake.ToListAsync());
        }

        // DELETE: api/Cake/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCake(int id)
        {
            var cake = await _context.Cake.FindAsync(id);
            if (cake == null)
            {
                return NotFound();
            }

            _context.Cake.Remove(cake);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CakeExists(int id)
        {
            return _context.Cake.Any(e => e.Id == id);
        }
    }
}
