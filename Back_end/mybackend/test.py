import http.server
import socketserver
import os

PORT = 8000

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/myapp/receive/':
            print("Received GET request")
            
            # Path to the image
            image_path = "output.png"
            
            try:
                # Send response status code
                self.send_response(200)
                
                # Set CORS headers
                self.send_header('Access-Control-Allow-Origin', '*')  # Allow requests from any origin
                self.send_header('Access-Control-Allow-Methods', 'GET')  # Allow only GET requests
                self.send_header('Access-Control-Allow-Headers', 'Content-Type')  # Allow Content-Type header
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                
                # Send the JSON response with URL to the image
                response = {
                    'image_url': f"http://{self.server.server_address[0]}:{self.server.server_address[1]}/{image_path}"
                }
                self.wfile.write(bytes(str(response), "utf-8"))
            except Exception as e:
                print(f"Error: {e}")
                self.send_response(500)
                self.end_headers()
                self.wfile.write(bytes("Image retrieval failed", "utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

handler = MyRequestHandler

# Change the current directory to the directory containing the image file
os.chdir(os.path.dirname(os.path.abspath(__file__)))

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()
