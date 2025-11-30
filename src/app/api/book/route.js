export async function POST(req) {
  try {
    const body = await req.json();

    // Basic validation safeguard
    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    // THIS is where you'd normally:
    // - Send an email
    // - Insert into a DB
    // - Trigger notification
    // etc.
    // For now we just return success.

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
